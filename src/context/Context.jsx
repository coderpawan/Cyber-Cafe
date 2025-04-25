import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

function DataProvider({ children }) {
  const [latestJobList, setLatestJobList] = useState([]);
  const [resultList, setResultList] = useState([]);
  const [admitCardList, setAdmitCardList] = useState([]);
  const [servicesList, setServicesList] = useState([]);
  const [governmentJobsList, setGovernmentJobsList] = useState([]);
  const [sliderList, setSliderList] = useState([]);
  const [admissionList, setAdmissionList] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://v1.nocodeapi.com/pawan2341/fbsdk/PAgEncukegRZbpDX/firestore/allDocuments";

  const fetchCollection = async (collectionName, setter) => {
    try {
      const response = await fetch(`${baseUrl}?collectionName=${encodeURIComponent(collectionName)}`);
      const data = await response.json();

      if (data && Array.isArray(data)) {
        setter(data);
      } else {
        console.warn(`No data found for collection: ${collectionName}`);
      }
    } catch (error) {
      console.error(`Error fetching ${collectionName}:`, error);
    }
  };

  useEffect(() => {
    async function fetchAllData() {
      setLoading(true);
      await Promise.all([
        fetchCollection("Latest Jobs", setLatestJobList),
        fetchCollection("Result", setResultList),
        fetchCollection("Admit Card", setAdmitCardList),
        fetchCollection("Services", setServicesList),
        fetchCollection("Government Jobs", setGovernmentJobsList),
        fetchCollection("Slider", setSliderList),
        fetchCollection("Admission", setAdmissionList),
      ]);
      setLoading(false);
    }

    fetchAllData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        latestJobList,
        resultList,
        admitCardList,
        servicesList,
        governmentJobsList,
        sliderList,
        admissionList,
        loading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
