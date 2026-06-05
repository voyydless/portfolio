export default function DropdownToggle({ onClick }) {
  return (
    <button type="button" className="dropdown-toggle" onClick={onClick}>
      Tech Stack <span className="arrow">&#9660;</span>
    </button>
  )
}
