export default function ResponsiveTable({ children, ...props }) {
  return (
    <div className="table-scroll">
      <table {...props}>{children}</table>
    </div>
  );
}
