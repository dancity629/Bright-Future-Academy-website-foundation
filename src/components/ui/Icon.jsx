import {
  Award,
  Blocks,
  BookOpen,
  Bus,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Users,
} from 'lucide-react'

// Lets data files reference icons by name without importing components.
const icons = { Award, Blocks, BookOpen, Bus, FlaskConical, GraduationCap, HeartHandshake, ShieldCheck, Users }

export default function Icon({ name, ...props }) {
  const Component = icons[name] ?? BookOpen
  return <Component aria-hidden="true" {...props} />
}
