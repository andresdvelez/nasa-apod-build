import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
  const [state, setState] = useState({
    res: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    axios.get(url).then((res) => {
      setState({
        loading: false,
        error: null,
        res,
      });
    });
  }, [url]);

  return state;
};

export default useAxios;
