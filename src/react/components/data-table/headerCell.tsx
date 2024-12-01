import { Column } from "@tanstack/react-table"
import { FaChevronDown, FaChevronUp } from "react-icons/fa6"

export const HeaderCell = ({column, title}: {column:Column<any, any>, title:string}) => {
    return(
        <div
          className="cursor-pointer flex flex-row items-center gap-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <p>{title}</p>
          {column.getIsSorted() != false &&
            <>
              {column.getIsSorted() === "asc" ?
                <FaChevronDown className="h-3 w-3" />
                :
                <FaChevronUp className="h-3 w-3" />
              }
            </>
          }
        </div>
    )
}