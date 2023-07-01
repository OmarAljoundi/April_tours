const Social = () => {
  const socialContent = [
    {
      id: 1,
      icon: "icon-facebook",
      link: "https://www.facebook.com/apriltours1/",
    },
    {
      id: 3,
      icon: "icon-instagram",
      link: "https://www.instagram.com/apriltours1/",
    },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <i className={`${item.icon} text-14`} />
        </a>
      ))}
    </>
  );
};

export default Social;
