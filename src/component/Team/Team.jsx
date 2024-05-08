const Team = () => {
  const people = [
    {
      name: "Will Smith",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW4lMjBmYWNlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Aman Sharma",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1618568949779-895d81686151?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGh1bWFuJTIwZmFjZSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Gagan Sharma",
      role: "Director",
      imageUrl:
        "https://images.unsplash.com/photo-1624270858113-dfd72a32d704?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGh1bWFuJTIwZmFjZSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Leslie Alexander",
      role: "CFO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Shagun Singh",
      role: "President",
      imageUrl:
        "https://images.unsplash.com/photo-1512529920731-e8abaea917a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFuJTIwZmFjZSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Light Yagami",
      role: "Vice President",
      imageUrl:
        "https://images.unsplash.com/photo-1641143177969-bb5c07375a1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGh1bWFuJTIwZmFjZSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            "Meet the guiding force behind our company's vision and success. Our
            leadership team brings expertise, innovation, and dedication to
            every aspect of our organization."
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
