const data = [
  { img: "./src/assets/google.png" },
  { img: "./src/assets/slack.png" },
  { img: "./src/assets/atlassian.png" },
  { img: "./src/assets/dropbox.png" },
  { img: "./src/assets/shopify.png" },
];

export default function Sponsors() {
  return (
    <div className="flex container mx-auto p-14 justify-center">
      {data.map((item, index) => (
        <img
          className="mr-10"
          key={index}
          src={item.img}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
}
