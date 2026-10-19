import SmartImage from './SmartImage'
import './StaffCard.css'

function initials(name) {
  return name
    .replace(/^(Mr|Mrs|Ms|Miss|Dr|Prof)\.?\s+/i, '')
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
}

export default function StaffCard({ member }) {
  return (
    <article className="staff-card">
      <div className="staff-card__photo">
        {member.photo ? (
          <SmartImage src={member.photo} alt={`Portrait of ${member.name}`} />
        ) : (
          <span className="staff-card__initials" aria-hidden="true">
            {initials(member.name)}
          </span>
        )}
      </div>
      <div className="staff-card__body">
        <p className="staff-card__role">{member.role}</p>
        <h3 className="staff-card__name">{member.name}</h3>
        <p className="staff-card__qual">{member.qualifications}</p>
        <p className="staff-card__bio">{member.bio}</p>
      </div>
    </article>
  )
}
