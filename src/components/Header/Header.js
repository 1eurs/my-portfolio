import Button from "../Button/Button";

const Header = ({
  handleContactScroll,
  handleWorkScroll,
  handleAboutScroll,
}) => {
  return (
    <div className="mt-6 flex items-center justify-between sticky top-0 z-10 bg-white">
      <h1 className="font-medium mob:p-2 laptop:p-0">Mahmood.</h1>
      <div>
        <Button onClick={handleWorkScroll}>Projects</Button>
        <Button onClick={handleAboutScroll}>About</Button>
        <Button onClick={handleContactScroll}>Contact</Button>
      </div>
    </div>
  );
};

export default Header;
