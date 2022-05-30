const Skills = (props) => {
  return (
    <div className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0">
      <h1 className="text-2xl text-bold">Skills.</h1>
      <div className="mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-6">
        {props.children}
      </div>
    </div>
  );
};

export default Skills;
