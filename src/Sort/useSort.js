import React from "react";

const useSort = (items, heading = null) => {
    const [sortHeading, setSortHeading] = React.useState(heading);
    
    const sortedEmployees = React.useMemo(() => {
      let sortableEmployees = [...items];
      if (sortHeading !== null) {
        sortableEmployees.sort((a, b) => {
          if (a[sortHeading.key] < b[sortHeading.key]) {
            return sortHeading.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortHeading.key] > b[sortHeading.key]) {
            return sortHeading.direction === 'ascending' ? 1 : -1;
          }
          
          return 0;
        });
      }
      return sortableEmployees;
    }, [items, sortHeading]);
  
    const requestSort = key => {
      let direction = 'ascending';
      if (sortHeading && sortHeading.key === key && sortHeading.direction === 'ascending') {
        direction = 'descending';
      }
      setSortHeading({ key, direction });
    }
  
    return { items: sortedEmployees, requestSort };
  }

  export default useSort;