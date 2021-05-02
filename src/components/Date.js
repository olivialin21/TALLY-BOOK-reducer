export default function Date() {
  return(
    <div className="date">
      {localStorage.getItem("date").substring(0,15)}
    </div>
  );
}