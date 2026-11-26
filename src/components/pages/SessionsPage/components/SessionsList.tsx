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
        <li key={session.id}>{session.title}</li>
      ))}
    </ul>
  );
}
