import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

export const Chart = (props: any) => {
  const {
    data,
    colors: {
      backgroundColor = "white",
      lineColor = "#2962FF",
      textColor = "black",
      areaTopColor = "#2962FF",
      areaBottomColor = "rgba(41, 98, 255, 0.28)",
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      //   width: chartContainerRef.current.clientWidth,
      width: 800,
      height: 200,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    newSeries.setData(data);
    const markers = [];
    newSeries.setMarkers(markers);
    chart.applyOptions({
      watermark: {
        visible: true,
        fontSize: 15,
        horzAlign: "center",
        vertAlign: "top",
        color: "black",
        text: "Veritas Network",
      },
    });
    chart.timeScale().applyOptions({ barSpacing: 100 });
    chart
      .priceScale("right")
      .applyOptions({ scaleMargins: { bottom: 0.1, top: 0.2 } });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return <div ref={chartContainerRef} />;
};
