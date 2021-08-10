import React from "react";

import Filter from "../components/Filter";
import EmergencyCard from "../components/EmergencyCard";
import RequestSection from "../components/RequestSection";

const HomePage = () => {
  return (
    <>
      <EmergencyCard />
      <Filter />
      <RequestSection />
    </>
  );
};

export default HomePage;
