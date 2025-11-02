import Map from './Map';

type Props = { ariaLabel?: string };

export default function MapShell({ ariaLabel }: Props) {
  return (
    <section
      aria-label={ariaLabel ?? 'Map container'}
      className="absolute inset-0"
    >
      <Map />
    </section>
  );
}
