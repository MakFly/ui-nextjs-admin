"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ComparisonRow { label: string; valueA: string | number; valueB: string | number; higherIsBetter?: boolean; }
interface ComparisonTableProps { title?: string; labelA: string; labelB: string; rows: ComparisonRow[]; }

function getDeltaClass(a: string | number, b: string | number, higherIsBetter: boolean): string {
  const numA = typeof a === "number" ? a : parseFloat(a);
  const numB = typeof b === "number" ? b : parseFloat(b);
  if (isNaN(numA) || isNaN(numB) || numA === numB) return "";
  const better = higherIsBetter ? numB > numA : numB < numA;
  return better ? "text-green-600 font-medium" : "text-red-600 font-medium";
}

export function ComparisonTable({ title, labelA, labelB, rows }: ComparisonTableProps) {
  return (
    <Card>
      {title && <CardHeader><CardTitle>{title}</CardTitle></CardHeader>}
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Métrique</TableHead>
              <TableHead className="text-right">{labelA}</TableHead>
              <TableHead className="text-right">{labelB}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.label}>
                <TableCell className="font-medium">{row.label}</TableCell>
                <TableCell className="text-right">{row.valueA}</TableCell>
                <TableCell className={`text-right ${getDeltaClass(row.valueA, row.valueB, row.higherIsBetter ?? true)}`}>{row.valueB}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
