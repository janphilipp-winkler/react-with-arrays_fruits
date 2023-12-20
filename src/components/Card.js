import "./Card.css";

export default function Card({ name, color }) {
  return <p className={`card card--${color}`}>{name}</p>;
}

// import "./Card.css";

// export default function Card({ name, color }) {
//   console.log(color);
//   return (
//     <p className="card" style={{ backgroundColor: `${color} ` }}>
//       {name}
//     </p>
//   );
// }
