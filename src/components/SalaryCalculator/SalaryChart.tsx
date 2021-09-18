import { ResponsiveBar } from "@nivo/bar";
import { DataStructure } from "../../types";

interface SalaryChartProps {
  data: DataStructure[];
}

const SalaryChart = (props: SalaryChartProps) => {
  const { data } = props;
  const formattedData = data.map((singleData: DataStructure) => {
    const { date, net, taxes, gross } = singleData;
    return {
      date,
      net: net.raw,
      taxes: taxes.raw,
      gross: gross.raw,
    };
  });

  return (
    <div style={{ height: 400 }}>
      <ResponsiveBar
        data={formattedData}
        keys={["net", "taxes"]}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        enableLabel={false}
        // valueFormat={({ format: "", enabled: false })}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "date",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "salary",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default SalaryChart;
