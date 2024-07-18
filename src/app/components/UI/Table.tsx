import React from "react";

type TableProps = {
  rows: string[][];
};

export default function Table({ rows }: TableProps) {
  return (
    <div className="w-full max-h-96 overflow-auto general-gray-border shadow-custom">
      <table
        className="w-full bg-[#FDFDFD] divide-y divder-[red] text-lg text-first"
        style={{ borderColor: "rgba(229, 229, 229, 1)" }}
      >
        <thead className="bg-[#FAFAFA]">
          <tr>
            {rows[0]?.map((field) => (
              <th className="px-2 max-xl:px-8 h-16 text-left font-[400] text-[#999999]">
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y">
          {rows.slice(1)?.map((_, rowIdx) => (
            <tr key={rowIdx + 1}>
              {rows[rowIdx + 1]?.map((field, fieldIdx) => (
                <td
                  key={fieldIdx}
                  className="h-16 font-medium whitespace-nowrap px-2 max-xl:px-8"
                >
                  {field}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
