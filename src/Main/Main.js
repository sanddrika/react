function Main() {
  const users = [
    {
      id: 1,
      name: "Leanne",
      age: 25,
      lastname: "Graham",
      isUserLoggedIn: true,
    },
    {
      id: 2,
      name: "Ervin",
      age: 29,
      lastname: "Howell",
      isUserLoggedIn: false,
    },
    {
      id: 3,
      name: "Victor",
      age: 45,
      lastname: "Plains",
      isUserLoggedIn: true,
    },
    {
      id: 4,
      name: "Clementine",
      age: 33,
      lastname: "Bauch",
      isUserLoggedIn: false,
    },
    {
      id: 5,
      name: "Patricia",
      age: 48,
      lastname: "Lebsack",
      isUserLoggedIn: false,
    },
  ];

  return (
    <div>
      {users.map((person) => {
        return (
          <ChildUser
            user={person}
            check={person.isUserLoggedIn}
            key={person.id}
          />
        );
      })}
    </div>
  );
}
// ასე სწორია? ანუ ყველა იუზერი უნდა იხატებოდეს და ზოგისთვის მარტო სახელი და ზოგისთვის
// მხოლოდ "you are not authorized to see user list."" "ცოტა ვერ მივხვდი რა მევალებოდა"
const ChildUser = ({user, check}) => {
  return check ? (
    <>
      <h1>{user.name}</h1>
      <h3>{user.lastname}</h3>
      <h3>{user.age}</h3>
    </>
  ) : (
    <h1> this user is not authorized to see user list.</h1>
  );
};

export default Main;
