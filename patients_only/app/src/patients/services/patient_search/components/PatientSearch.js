import React from 'react';
import { observer } from 'mobx-react';
import UISearch from 'components/ui/UISearch';

// --------------------------------------------

const PatientSearch = ({ store }) => {

  let saveKeyword = (keyword) => {
    store.setKeyword(keyword);
  }

  let search = () => {
    store.search(store.keyword);
  }

  let clearSearch = () => {
    store.clearSearch();
  }

  return (
    <div className="sub-toolbar">
      <UISearch
        placeholder="Search..."
        keyword={store.keyword}
        parentOnChange={saveKeyword}
        parentOnSubmit={search}
        parentOnClear={clearSearch} />
    </div>
  );
}

export default observer(PatientSearch);