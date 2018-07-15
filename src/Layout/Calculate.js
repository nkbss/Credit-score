import React from 'react'
import {
  Grid,
  Container,
  Form,
  Input,
  Label,
  Select,
  Button
} from 'semantic-ui-react'

const calculate = props => {
  const styInput = {
    width: '100px'
  }

  const options = [
    { key: 'm', text: 'Male', value: 0 },
    { key: 'f', text: 'Female', value: 1 }
  ]

  const level = [
    { key: 'G', text: 'Graduate', value: 4 },
    { key: 'U', text: 'Ungrade', value: 3 },
    { key: 'H', text: 'High School', value: 2 },
    { key: 'M', text: 'Middle School', value: 1 },
    { key: 'O', text: 'Other', value: 0 }
  ]

  return (
    <Container textAlign="center">
      <h1 style={{ paddingTop: '8%' }}>Credit Scoring Calculator</h1>
      <Grid textAlign="center" style={{ paddingTop: '8%' }}>
        <Grid.Row>
          <Grid.Column width={5} textAlign="right">
            <h3>Period join Company</h3>
          </Grid.Column>
          <Grid.Column width={3} textAlign="left">
            <Input
              placeholder="Year"
              labelPosition="right"
              style={styInput}
              onChange={props.handlerYear}
              type="number"
            >
              <input size="mini" />
              <Label>Year</Label>
            </Input>
          </Grid.Column>
          <Grid.Column width={3} textAlign="left">
            <Input
              placeholder="Month"
              labelPosition="right"
              style={styInput}
              type="number"
              onChange={props.handlerMonth}
            >
              <input />
              <Label>Month</Label>
            </Input>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} textAlign="right">
            <h3>Gender</h3>
          </Grid.Column>
          <Grid.Column width={6} textAlign="left">
            <Form.Field
              control={Select}
              options={options}
              placeholder="Gender"
              onChange={props.handlerGender}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} textAlign="right">
            <h3>Late in 6 Months</h3>
          </Grid.Column>
          <Grid.Column width={6} textAlign="left">
            <Input
              placeholder="times"
              style={{ width: '20%' }}
              type="number"
              onChange={props.handlerTimes}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} textAlign="right">
            <h3>Education Level</h3>
          </Grid.Column>
          <Grid.Column width={6} textAlign="left">
            <Form.Field
              control={Select}
              options={level}
              placeholder="Education Level"
              onChange={props.handlerEdlevel}
            />
          </Grid.Column>
        </Grid.Row>
        {props.calculate !== false ? (
          <Grid.Column textAlign="center" width={12}>
            <h3>Credit Score : {props.creditscore}</h3>
          </Grid.Column>
        ) : null}
        <Grid.Row textAlign="center">
          <Button
            basic
            color="black"
            onClick={() => props.calculateCreditScore()}
          >
            calculate
          </Button>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default calculate
