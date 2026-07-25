import { Card, CardContent, Grid, List} from "@mui/joy";
import React, { useState, useEffect, useRef } from "react";

interface Options {
  label: string,
  value: any
}

interface Props {
  label: string,
  options: Options[],
  value?: string[],
  onChange: (selected: any[]) => void
};

export const FilterButton: React.FC<Props> = ({
  label,
  options,
  value=[],
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<any[]>(value);
  const [searchText, setSearchText] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle selection
  const handleCheckboxChange = (optionValue: string) => {
    const updatedOptions = selectedOptions.includes(optionValue)
      ? selectedOptions.filter((val) => val !== optionValue)
      : [...selectedOptions, optionValue];
    setSelectedOptions(updatedOptions);
    onChange(updatedOptions);
  };

  // Handle "Select All"
  const handleSelectAll = () => {
    const allValues = options.map((option) => option.value);
    setSelectedOptions(
      selectedOptions.length === options.length ? [] : allValues
    );
    onChange(
      selectedOptions.length === options.length ? [] : allValues
    );
  };

  // Filter options
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Grid xs={4} ref={dropdownRef}>
      <Card
        variant="outlined"
        sx={{
          "&:hover": {
            borderColor: "var(--joy-palette-neutral-700)",
          },
          "cursor": "pointer",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <CardContent>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            columns={20}
            spacing={1}
          >
            <Grid xs={16}>
              <span style={{wordWrap: "break-word"}}>
                {selectedOptions.length
                  ? `${label.slice(0,5)}: ${selectedOptions.join(', ').length > 50 ? selectedOptions.join(', ').slice(0, 50) + "..." : selectedOptions.join(', ')}`
                  : label}
              </span>
            </Grid>
            <Grid xs={1}>
              <img
                src={"/assets/Icon/down-arrow-light.svg"}
                alt="Arrow"
                style={{height: "15px", width: "15px"}}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {isOpen && (
        <Card>
          <List
            style={{
              maxHeight:"250px",
            }}
            sx = {{overflow:"scroll"}}
          >
            <Grid
              alignContent={"center"}
              alignItems={"center"}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{
                  flex:"true"
                }}
              />
            </Grid>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <input
                type="checkbox"
                checked={selectedOptions.length === options.length}
                onChange={handleSelectAll}
              />
              <label>Select All</label>
            </Grid>
            {filteredOptions.map((option) => (
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
                key={option.value}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => handleCheckboxChange(option.value)}
                />
                <label>
                  {option.label}
                </label>
              </Grid>
            ))}
          </List>
        </Card>
      )}
    </Grid>
  );
};