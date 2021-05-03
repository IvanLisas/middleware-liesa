export type CategoryMeli = {
  id: string
  name: string
  children_categories: CategoryMeli[] | null
}
