import React, { useState, useEffect } from 'react';
import './Home.css'


const CheckboxTable = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [save, setSave] = useState([]);
  const [checkboxes, setCheckboxes] = useState([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ]);


  useEffect(() => {
    // Check if all individual checkboxes are selected
    const isAllSelected = checkboxes.every(row => row.every(checkbox => checkbox));
    setSelectAll(isAllSelected);
  }, [checkboxes]);


  const CheckboxChange = (rowIndex, checkboxIndex) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[rowIndex][checkboxIndex] = !checkboxes[rowIndex][checkboxIndex];
    setCheckboxes(updatedCheckboxes);
  };


  const SelectAll = () => {
    const updatedCheckboxes = checkboxes.map(row => row.map(() => !selectAll));
    setCheckboxes(updatedCheckboxes);
    setSelectAll(!selectAll);
  };

  const handleRowCheckboxChange = (rowIndex) => {
    const updatedCheckboxes = checkboxes.map((row, index) => {
      if (index === rowIndex) {
        // Toggle 
        const newRow = row.map((isChecked) => !row[0]);
        return newRow;
      }
      return row;
    });
    setCheckboxes(updatedCheckboxes);
  };
  
  const handleColumnCheckboxChange = (checkboxIndex) => {
    const updatedCheckboxes = checkboxes.map((row, rowIndex) => {
      const newRow = [...row];
      newRow[checkboxIndex] = !checkboxes[checkboxIndex ][checkboxIndex];
      console.log(newRow)
      
      return newRow;
    });
    setCheckboxes(updatedCheckboxes);
  };
  
 
  

  return (
    <table>


       
      <thead>
        <tr>
          <th>
            Select All 
            <input
              type="checkbox"
              checked={selectAll}
              onChange={SelectAll}
            />
          </th>
          <th>
            <input
              type="checkbox"
              checked={checkboxes.every(row => row[0])}
              onChange={() => handleColumnCheckboxChange(0)}
            />
          </th>
          <th>
            <input
              type="checkbox"
              checked={checkboxes.every(row => row[1])}
              onChange={() => handleColumnCheckboxChange(1)}
            />
          </th>
          <th>
            <input
              type="checkbox"
              checked={checkboxes.every(row => row[2])}
              onChange={() => handleColumnCheckboxChange(2)}
            />
          </th>
          <th>
            <input
              type="checkbox"
              checked={checkboxes.every(row => row[3])}
              onChange={() => handleColumnCheckboxChange(3)}
            />
          </th>
          <th>
            <input
              type="checkbox"
              checked={checkboxes.every(row => row[4])}
              onChange={() => handleColumnCheckboxChange(4)}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {checkboxes.map((rowCheckboxes, rowIndex) => (
          <tr key={rowIndex}>
            <td>
              <input
                type="checkbox"
                checked={rowCheckboxes.every(checkbox => checkbox)}
                onChange={() => handleRowCheckboxChange(rowIndex)}
              />
            </td>
            {rowCheckboxes.map((isChecked, checkboxIndex) => (
              <td key={checkboxIndex}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => CheckboxChange(rowIndex, checkboxIndex)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default CheckboxTable;
