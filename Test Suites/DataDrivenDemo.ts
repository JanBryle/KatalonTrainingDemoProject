<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>DataDrivenDemo</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>7</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>4c39c53f-b351-4c28-8588-7c29d2aa0877</testSuiteGuid>
   <testCaseLink>
      <guid>80fe6f91-f701-4af0-9973-52d8abe9bf31</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>cea573c3-c559-48ce-9bc1-9864b5678458</id>
         <masked>false</masked>
         <name>password</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/Demo/DataDrivenTestingDemo</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>b7e3f28d-cb8f-46db-8d4d-0082508ae608</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/loginData</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>b7e3f28d-cb8f-46db-8d4d-0082508ae608</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>4ccd472c-3a7d-4256-a55c-7d7df2c010c7</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>b7e3f28d-cb8f-46db-8d4d-0082508ae608</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>cea573c3-c559-48ce-9bc1-9864b5678458</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
