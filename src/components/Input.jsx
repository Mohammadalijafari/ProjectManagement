export default function Input({ label, textarea, ...props }) {
  return (
    <p>
      <label>{label}</label>
      {textarea ? <textarea {...props}></textarea> : <input {...props} />}
    </p>
  );
}
