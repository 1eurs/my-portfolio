const Projects = (props) => {
  return (
    <div className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0">
      <h1>Projects.</h1>
      <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-4">
        {props.children}
      </div>
    </div>
  );
};

export default Projects;
