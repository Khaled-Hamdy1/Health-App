import { useEffect, useState } from 'react';
import  supabase from '../services/supabase';

const useGetUserData = (table) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from(table)
        .select('*');

        if (error) {
          throw new Error(error.message);
        }

        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useGetUserData;