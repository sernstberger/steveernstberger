import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import resumeData from "./data";

// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1,
  },
});

const { jobs } = resumeData;
console.log("!!!", jobs);

// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Steve Ernstberger</Text>
      </View>
      {jobs.map((job) => {
        return (

            <View style={styles.section} key={job.company}>
              <Text>{job.company}</Text>
              <Text style={{ fontSize: 12 }}>{job.description}</Text>
            </View>

        );
      })}
    </Page>
  </Document>
);

export default Resume;
