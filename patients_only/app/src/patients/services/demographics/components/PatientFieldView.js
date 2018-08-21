import React from "react";
import { observer } from "mobx-react";
import UIListItem from "components/ui/UIListItem";

const PatientFieldView = ({ label, value }) => {
  return (
    <div>
      <UIListItem label={label} value={value} />
    </div>
  );
};

export default observer(PatientFieldView);
