export type CategotyType = {
  id: string
  name: string
  children_categories: CategotyType[] | null
}
