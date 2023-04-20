import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/navigation';
import SearchIcon from '@mui/icons-material/Search';
import { v4 as uuidv4 } from 'uuid';
import { useContextS } from '@/store/context/AllContext';

const accessToken = uuidv4();
export default function AutoComplete() {
  let {  allProducts  } =  useContextS();

  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [value, setValue] = React.useState([]);
  const loading = open && options?.length === 0;
  async function fetchProducts() {
    const response = await fetch('/api/product', {
      headers: {
        'Authorization': `${process.env.ACCESS_TOKEN}`
      }
    });
  const data = await response.json();
  console.log(accessToken)
  return data;
}
  

  React.useEffect(() => {
  setOptions(allProducts)
    if (!open) {
      setOptions([]);
    }
  }, [open,value, allProducts]);

  return (
   <>
  
      <Autocomplete
      
      noOptionsText='Search...'
      popupIcon={
    <SearchIcon
    
    />
  }
  
      // on
      id="asynchronous-demo"
      sx={{ width: 200 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option?.name === value?.name}
      getOptionLabel={(option) => option?.name}
      options={options}
      
      onSelectCapture={(e) => {
          console.log(e.target.value)
          setValue(e.target.value)
        //   if(e.target.value === ''){
        //   router.push(`/`)
        // }
        if(e.target.value !== ''){
          router.push(`/search/${e.target.value}`)
        }
    
        
        }}
       
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
       
          InputProps={{
            
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />

   </>
  );
}


