const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "تواصل عن طريق الهاتف",
      action: "tel:+972 672 7957",
      text: "+972 672 7957",
    },
    {
      id: 2,
      title: "تواصل عن طريق الايميل",
      action: "mailto:info@apriltours.com",
      text: "info@apriltours.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mb-5 text-right" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-dark-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
