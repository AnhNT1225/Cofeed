import React from 'react';
import {
    Tab,
    Tabs,
  } from "@mui/material";
const TabItem = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return (
        <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="All" />
        <Tab value="two" label="Following" />
        <Tab value="three" label="Newest" />
        
      </Tabs>
    );
};

export default TabItem;