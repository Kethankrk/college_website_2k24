import React from "react";

function SingleDepartmentPage({ params }) {
  return (
    <div>
      <p>You have reached {params.departmentName}</p>
    </div>
  );
}

export default SingleDepartmentPage;
