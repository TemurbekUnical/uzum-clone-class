import React, { useState, useContext } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import AppContext from '../../App.context';
import { dataMahsulotlar } from '../../bekendData/mahsulotlar';
import { useNavigate } from 'react-router-dom';


const Search = () => {
    const { action: {
        mahsulotlarniIzlash
    } } = useContext(AppContext)
    const filter = createFilterOptions();
    const navigate = useNavigate()

    const [value, setValue] = useState(null)

    return (
        <Autocomplete
            value={value}
            onChange={(e) => mahsulotlarniIzlash(e.target.value)}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some((option) => inputValue === option.nomi);
                if (inputValue !== '' && !isExisting) {
                    filtered.push({
                        inputValue,
                        title: `Add "${inputValue}"`,
                    });
                }

                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={dataMahsulotlar}
            getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                    return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                    return option.inputValue;
                }
                // Regular option
                return option.nomi;
            }}
            renderOption={(props, option) => <li {...props} onClick={(e) => {
                props.onClick(e);
                navigate(`/product-info/${option.nomi}`)
            }} >{option.nomi}</li>}

            sx={{ width: 500 }}
            freeSolo
            renderInput={(params) => (
                <TextField {...params} label="Free solo with text demo" />
            )}
        />
    );
}

export default Search