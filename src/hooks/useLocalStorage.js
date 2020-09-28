export const useLocalStorage = () => {
  //SETTER
  const handleSave = (startupInfo) => {
    const startups = localStorage.getItem("startups") ?? "[]";
    const parsedStartups = JSON.parse(startups);

    parsedStartups.push(startupInfo);

    const stringifiedStartups = JSON.stringify(parsedStartups);

    localStorage.setItem("startups", stringifiedStartups);
  };
  //FIN SETTER

  //GETTER
  const getStartups = localStorage.getItem("startups");
  const parsedStartups = JSON.parse(getStartups);
  //FIN GETTER

  return [parsedStartups, handleSave];
};
