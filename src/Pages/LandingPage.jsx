// LandingPage for website
// Contains image and welcome message

export default function LandingPage() {

  return (
    <div>
      <img src={import.meta.env.BASE_URL + 'Photos/AshtonBench.jpg'} alt='Ashton-on-Bench' className="backImage" />
    </div>
  );
}