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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  //will not be output in the browser cosole, only be there in our terminal bcoz browser don't have access to code running here in this function
  // console.log(meetupId);

  //fetch data

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e9/Abbey-of-senanque-provence-gordes.jpg",
        id: meetupId,
        title: "A meetup",
        address: "Hindalco Colony, Renukoot",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
