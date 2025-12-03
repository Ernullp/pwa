import FilterSidebar from '../FilterSidebar';

export default function FilterSidebarExample() {
  return (
    <div className="p-4" dir="rtl">
      <FilterSidebar onFilterChange={() => console.log('Filters changed')} />
    </div>
  );
}
