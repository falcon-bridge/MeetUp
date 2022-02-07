import { Fragment } from "react/cjs/react.production.min";

import { useRouter } from "next/router";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/e/e9/Abbey-of-senanque-provence-gordes.jpg"
      title="A meetup"
      address="Hindalco Colony, Renukoot"
      description="The meetup description"
    />
  );
};

export default MeetupDetails;
