export function filterByQuery(data: any[], query: string, fields: string[]) {
  if (!query) return data
  const q = query.toLowerCase()
  return data.filter((item) =>
    fields.some((field) =>
      item[field]?.toString().toLowerCase().includes(q)
    )
  )
}
