import React from "react";

import ErrorMessage from "@components/common/ErrorMessage";

const EmptyState: React.FC = () => {
  return (
    <tr>
      <td colSpan={5} className="px-2 py-2 text-sm md:px-4 md:text-base">
        <ErrorMessage className="my-20 text-center">
          No data found.
        </ErrorMessage>
      </td>
    </tr>
  );
};

export default EmptyState;
