import React from "react";
import {
  Input,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { SearchIcon } from "../../icons/SearchIcon";
import { ChevronDownIcon } from "../../icons/ChevronDownIcon";
import { PlusIcon } from "../../icons/PlusIcon";
import { capitalize } from "../../utils";
import { statusOptions, columns } from "../../data";
import UserForm from "./UserForm";

const FilterSection = ({
  filterValue,
  setFilterValue,
  statusFilter,
  setStatusFilter,
  visibleColumns,
  setVisibleColumns,
  onSearchChange,
  usersLength,
  onRowsPerPageChange,
}) => (
  <div className="flex flex-col gap-4">
    <div className="flex justify-between gap-3 items-end">
      <Input
        isClearable
        classNames={{
          base: "w-full sm:max-w-[44%]",
          inputWrapper: "border-1",
        }}
        placeholder="Search by number document..."
        size="sm"
        startContent={<SearchIcon className="text-default-300" />}
        value={filterValue}
        variant="bordered"
        onClear={() => setFilterValue("")}
        onValueChange={onSearchChange}
      />
      <div className="flex gap-3">
        <Dropdown>
          <DropdownTrigger className="hidden sm:flex">
            <Button
              endContent={<ChevronDownIcon className="text-small" />}
              size="sm"
              variant="flat"
            >
              Columns
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="Table Columns"
            closeOnSelect={false}
            selectedKeys={visibleColumns}
            selectionMode="multiple"
            onSelectionChange={setVisibleColumns}
            disabledKeys={["actions", "numberDocument"]}
          >
            {columns.map((column) => (
              <DropdownItem key={column.uid} className="capitalize">
                {capitalize(column.name)}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        {/* Button to open the modal */}
        <UserForm />
      </div>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-default-400 text-small">
        Total {usersLength} users
      </span>
      <label className="flex items-center text-default-400 text-small">
        Rows per page:
        <select
          className="bg-transparent outline-none text-default-400 text-small"
          onChange={onRowsPerPageChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </label>
    </div>
  </div>
);

export default FilterSection;
