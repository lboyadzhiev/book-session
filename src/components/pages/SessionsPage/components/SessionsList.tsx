import SessionItem from "./SessionItem";

type Session = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

type SessionsListProps = {
  sessions: Session[];
};

export default function SessionsList({ sessions }: SessionsListProps) {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <li key={session.id}>
          <SessionItem
            id={session.id}
            title={session.title}
            summary={session.summary}
            image={session.image}
          />
        </li>
      ))}
    </ul>
  );
}
