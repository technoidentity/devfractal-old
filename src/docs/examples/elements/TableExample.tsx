import React from 'react'
import { logger } from '../common'
import {
  Section,
  Table,
  TableBody,
  TableFoot,
  TableHead,
  Td,
  Th,
  Title,
  Tr,
} from '../devfractal'

export const TableExample: React.SFC = () => (
  <>
    <Section>
      <Title>Bordered Table</Title>
      <Table bordered>
        <TableHead>
          <Tr>
            <Th>one</Th>
            <Th>two</Th>
          </Tr>
        </TableHead>
        <TableBody>
          <Tr>
            <Td>three</Td>
            <Td>four</Td>
          </Tr>
        </TableBody>
      </Table>
    </Section>
    <Section>
      <Title>Striped Table</Title>
      <Table striped>
        <TableHead>
          <Tr>
            <Th>one</Th>
            <Th>two</Th>
          </Tr>
        </TableHead>
        <TableBody>
          <Tr>
            <Td>three</Td>
            <Td>four</Td>
          </Tr>
          <Tr>
            <Td>five</Td>
            <Td>six</Td>
          </Tr>
          <Tr>
            <Td>seven</Td>
            <Td>eight</Td>
          </Tr>
          <Tr>
            <Td>nine</Td>
            <Td>ten</Td>
          </Tr>
          <Tr>
            <Td>eleven</Td>
            <Td>twelve</Td>
          </Tr>
        </TableBody>
      </Table>
    </Section>
    <Section>
      <Title>Narrow Table</Title>
      <Table narrow>
        <TableHead>
          <Tr>
            <Th>one</Th>
            <Th>two</Th>
          </Tr>
        </TableHead>
        <TableBody>
          <Tr>
            <Td>three</Td>
            <Td>four</Td>
          </Tr>
          <Tr>
            <Td>five</Td>
            <Td>six</Td>
          </Tr>
          <Tr>
            <Td>seven</Td>
            <Td>eight</Td>
          </Tr>
          <Tr>
            <Td>nine</Td>
            <Td>ten</Td>
          </Tr>
          <Tr>
            <Td>eleven</Td>
            <Td>twelve</Td>
          </Tr>
        </TableBody>
      </Table>
    </Section>
    <Section>
      <Title>Hoverable Table</Title>
      <Table hoverable>
        <TableHead>
          <Tr>
            <Th>one</Th>
            <Th>two</Th>
          </Tr>
        </TableHead>
        <TableBody>
          <Tr>
            <Td>three</Td>
            <Td>four</Td>
          </Tr>
          <Tr>
            <Td>five</Td>
            <Td>six</Td>
          </Tr>
          <Tr>
            <Td>seven</Td>
            <Td>eight</Td>
          </Tr>
          <Tr>
            <Td>nine</Td>
            <Td>ten</Td>
          </Tr>
          <Tr>
            <Td>eleven</Td>
            <Td>twelve</Td>
          </Tr>
        </TableBody>
      </Table>
    </Section>
    <Section>
      <Title>FullWidth Table</Title>
      <Table fullWidth>
        <TableHead>
          <Tr>
            <Th>one</Th>
            <Th>two</Th>
          </Tr>
        </TableHead>
        <TableBody>
          <Tr>
            <Td>three</Td>
            <Td>four</Td>
          </Tr>
          <Tr>
            <Td>five</Td>
            <Td>six</Td>
          </Tr>
          <Tr>
            <Td>seven</Td>
            <Td>eight</Td>
          </Tr>
          <Tr>
            <Td>nine</Td>
            <Td>ten</Td>
          </Tr>
          <Tr>
            <Td>eleven</Td>
            <Td>twelve</Td>
          </Tr>
        </TableBody>
      </Table>
    </Section>
    <Section>
      <Title>Combine All Modifiers</Title>
      <Table bordered striped narrow hoverable fullWidth>
        <TableHead>
          <Tr>
            <Th>one</Th>
            <Th>two</Th>
          </Tr>
        </TableHead>
        <TableBody>
          <Tr>
            <Td>three</Td>
            <Td>four</Td>
          </Tr>
          <Tr>
            <Td>five</Td>
            <Td>six</Td>
          </Tr>
          <Tr>
            <Td>seven</Td>
            <Td>eight</Td>
          </Tr>
          <Tr>
            <Td>nine</Td>
            <Td>ten</Td>
          </Tr>
          <Tr>
            <Td>eleven</Td>
            <Td>twelve</Td>
          </Tr>
        </TableBody>
      </Table>
    </Section>
    <Section>
      <Title>Example</Title>
      <Table bordered striped>
        <TableHead>
          <Tr>
            <Th>
              <abbr title="Position">Pos</abbr>
            </Th>
            <Th>Team</Th>
            <Th>
              <abbr title="Played">Pld</abbr>
            </Th>
            <Th>
              <abbr title="Won">W</abbr>
            </Th>
            <Th>
              <abbr title="Drawn">D</abbr>
            </Th>
            <Th>
              <abbr title="Lost">L</abbr>
            </Th>
            <Th>
              <abbr title="Goals for">GF</abbr>
            </Th>
            <Th>
              <abbr title="Goals against">GA</abbr>
            </Th>
            <Th>
              <abbr title="Goal difference">GD</abbr>
            </Th>
            <Th>
              <abbr title="Points">Pts</abbr>
            </Th>
            <Th>Qualification or relegation</Th>
          </Tr>
        </TableHead>
        <TableFoot>
          <Tr>
            <Th>
              <abbr title="Position">Pos</abbr>
            </Th>
            <Th>Team</Th>
            <Th>
              <abbr title="Played">Pld</abbr>
            </Th>
            <Th>
              <abbr title="Won">W</abbr>
            </Th>
            <Th>
              <abbr title="Drawn">D</abbr>
            </Th>
            <Th>
              <abbr title="Lost">L</abbr>
            </Th>
            <Th>
              <abbr title="Goals for">GF</abbr>
            </Th>
            <Th>
              <abbr title="Goals against">GA</abbr>
            </Th>
            <Th>
              <abbr title="Goal difference">GD</abbr>
            </Th>
            <Th>
              <abbr title="Points">Pts</abbr>
            </Th>
            <Th>Qualification or relegation</Th>
          </Tr>
        </TableFoot>
        <TableBody>
          <Tr>
            <Th>1</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                title="Leicester City F.C."
              >
                Leicester City
              </a>
              <strong>(C)</strong>
            </Td>
            <Td>38</Td>
            <Td>23</Td>
            <Td>12</Td>
            <Td>3</Td>
            <Td>68</Td>
            <Td>36</Td>
            <Td>+32</Td>
            <Td>81</Td>
            <Td>
              Qualification for the
              <a
                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                title="2016–17 UEFA Champions League"
              >
                Champions League group stage
              </a>
            </Td>
          </Tr>
          <Tr>
            <Th>2</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Arsenal_F.C."
                title="Arsenal F.C."
              >
                Arsenal
              </a>
            </Td>
            <Td>38</Td>
            <Td>20</Td>
            <Td>11</Td>
            <Td>7</Td>
            <Td>65</Td>
            <Td>36</Td>
            <Td>+29</Td>
            <Td>71</Td>
            <Td>
              Qualification for the
              <a
                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                title="2016–17 UEFA Champions League"
              >
                Champions League group stage
              </a>
            </Td>
          </Tr>
          <Tr>
            <th>3</th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
                title="Tottenham Hotspur F.C."
              >
                Tottenham Hotspur
              </a>
            </Td>
            <Td>38</Td>
            <Td>19</Td>
            <Td>13</Td>
            <Td>6</Td>
            <Td>69</Td>
            <Td>35</Td>
            <Td>+34</Td>
            <Td>70</Td>
            <Td>
              Qualification for the
              <a
                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                title="2016–17 UEFA Champions League"
              >
                Champions League group stage
              </a>
            </Td>
          </Tr>
          <Tr selected>
            <Th>4</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Manchester_City_F.C."
                title="Manchester City F.C."
              >
                Manchester City
              </a>
            </Td>
            <Td>38</Td>
            <Td>19</Td>
            <Td>9</Td>
            <Td>10</Td>
            <Td>71</Td>
            <Td>41</Td>
            <Td>+30</Td>
            <Td>66</Td>
            <Td>
              Qualification for the
              <a
                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round"
                title="2016–17 UEFA Champions League"
              >
                Champions League play-off round
              </a>
            </Td>
          </Tr>
          <Tr>
            <Th>5</Th>
            <Td
              onClick={() => {
                logger('Td onClick')
              }}
            >
              <a
                href="https://en.wikipedia.org/wiki/Manchester_United_F.C."
                title="Manchester United F.C."
              >
                Manchester United
              </a>
            </Td>
            <Td>38</Td>
            <Td>19</Td>
            <Td>9</Td>
            <Td>10</Td>
            <Td>49</Td>
            <Td>35</Td>
            <Td>+14</Td>
            <Td>66</Td>
            <Td>
              Qualification for the
              <a
                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
                title="2016–17 UEFA Europa League"
              >
                Europa League group stage
              </a>
            </Td>
          </Tr>
          <Tr>
            <Th>6</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Southampton_F.C."
                title="Southampton F.C."
              >
                Southampton
              </a>
            </Td>
            <Td>38</Td>
            <Td>18</Td>
            <Td>9</Td>
            <Td>11</Td>
            <Td>59</Td>
            <Td>41</Td>
            <Td>+18</Td>
            <Td>63</Td>
            <Td>
              Qualification for the
              <a
                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
                title="2016–17 UEFA Europa League"
              >
                Europa League group stage
              </a>
            </Td>
          </Tr>
          <Tr>
            <Th>7</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/West_Ham_United_F.C."
                title="West Ham United F.C."
              >
                West Ham United
              </a>
            </Td>
            <Td>38</Td>
            <Td>16</Td>
            <Td>14</Td>
            <Td>8</Td>
            <Td>65</Td>
            <Td>51</Td>
            <Td>+14</Td>
            <Td>62</Td>
            <Td>
              Qualification for the
              <a
                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round"
                title="2016–17 UEFA Europa League"
              >
                Europa League third qualifying round
              </a>
            </Td>
          </Tr>
          <Tr>
            <Th>8</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Liverpool_F.C."
                title="Liverpool F.C."
              >
                Liverpool
              </a>
            </Td>
            <Td>38</Td>
            <Td>16</Td>
            <Td>12</Td>
            <Td>10</Td>
            <Td>63</Td>
            <Td>50</Td>
            <Td>+13</Td>
            <Td>60</Td>
            <Td />
          </Tr>
          <Tr>
            <Th>9</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Stoke_City_F.C."
                title="Stoke City F.C."
              >
                Stoke City
              </a>
            </Td>
            <Td>38</Td>
            <Td>14</Td>
            <Td>9</Td>
            <Td>15</Td>
            <Td>41</Td>
            <Td>55</Td>
            <Td>−14</Td>
            <Td>51</Td>
            <Td />
          </Tr>
          <Tr>
            <Th>10</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Chelsea_F.C."
                title="Chelsea F.C."
              >
                Chelsea
              </a>
            </Td>
            <Td>38</Td>
            <Td>12</Td>
            <Td>14</Td>
            <Td>12</Td>
            <Td>59</Td>
            <Td>53</Td>
            <Td>+6</Td>
            <Td>50</Td>
            <Td />
          </Tr>
          <Tr>
            <Th>11</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Everton_F.C."
                title="Everton F.C."
              >
                Everton
              </a>
            </Td>
            <Td>38</Td>
            <Td>11</Td>
            <Td>14</Td>
            <Td>13</Td>
            <Td>59</Td>
            <Td>55</Td>
            <Td>+4</Td>
            <Td>47</Td>
            <Td />
          </Tr>
          <Tr>
            <Th>12</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C."
                title="Swansea City A.F.C."
              >
                Swansea City
              </a>
            </Td>
            <Td>38</Td>
            <Td>12</Td>
            <Td>11</Td>
            <Td>15</Td>
            <Td>42</Td>
            <Td>52</Td>
            <Td>−10</Td>
            <Td>47</Td>
            <Td />
          </Tr>
          <Tr>
            <Th>13</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Watford_F.C."
                title="Watford F.C."
              >
                Watford
              </a>
            </Td>
            <Td>38</Td>
            <Td>12</Td>
            <Td>9</Td>
            <Td>17</Td>
            <Td>40</Td>
            <Td>50</Td>
            <Td>−10</Td>
            <Td>45</Td>
            <Td />
          </Tr>
          <Tr>
            <Th>14</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C."
                title="West Bromwich Albion F.C."
              >
                West Bromwich Albion
              </a>
            </Td>
            <Td>38</Td>
            <Td>10</Td>
            <Td>13</Td>
            <Td>15</Td>
            <Td>34</Td>
            <Td>48</Td>
            <Td>−14</Td>
            <Td>43</Td>
            <Td />
          </Tr>
          <Tr>
            <Th>15</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C."
                title="Crystal Palace F.C."
              >
                Crystal Palace
              </a>
            </Td>
            <Td>38</Td>
            <Td>11</Td>
            <Td>9</Td>
            <Td>18</Td>
            <Td>39</Td>
            <Td>51</Td>
            <Td>−12</Td>
            <Td>42</Td>
            <Td />
          </Tr>
          <Tr>
            <Th>16</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth"
                title="A.F.C. Bournemouth"
              >
                AFC Bournemouth
              </a>
            </Td>
            <Td>38</Td>
            <Td>11</Td>
            <Td>9</Td>
            <Td>18</Td>
            <Td>45</Td>
            <Td>67</Td>
            <Td>−22</Td>
            <Td>42</Td>
            <Td />
          </Tr>
          <Tr>
            <Th>17</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Sunderland_A.F.C."
                title="Sunderland A.F.C."
              >
                Sunderland
              </a>
            </Td>
            <Td>38</Td>
            <Td>9</Td>
            <Td>12</Td>
            <Td>17</Td>
            <Td>48</Td>
            <Td>62</Td>
            <Td>−14</Td>
            <Td>39</Td>
            <Td />
          </Tr>
          <Tr>
            <Th>18</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Newcastle_United_F.C."
                title="Newcastle United F.C."
              >
                Newcastle United
              </a>
              <strong>(R)</strong>
            </Td>
            <Td>38</Td>
            <Td>9</Td>
            <Td>10</Td>
            <Td>19</Td>
            <Td>44</Td>
            <Td>65</Td>
            <Td>−21</Td>
            <Td>37</Td>
            <Td>
              Relegation to the
              <a
                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
                title="2016–17 Football League Championship"
              >
                Football League Championship
              </a>
            </Td>
          </Tr>
          <Tr>
            <Th>19</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Norwich_City_F.C."
                title="Norwich City F.C."
              >
                Norwich City
              </a>
              <strong>(R)</strong>
            </Td>
            <Td>38</Td>
            <Td>9</Td>
            <Td>7</Td>
            <Td>22</Td>
            <Td>39</Td>
            <Td>67</Td>
            <Td>−28</Td>
            <Td>34</Td>
            <Td>
              Relegation to the
              <a
                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
                title="2016–17 Football League Championship"
              >
                Football League Championship
              </a>
            </Td>
          </Tr>
          <Tr>
            <Th>20</Th>
            <Td>
              <a
                href="https://en.wikipedia.org/wiki/Aston_Villa_F.C."
                title="Aston Villa F.C."
              >
                Aston Villa
              </a>
              <strong>(R)</strong>
            </Td>
            <Td>38</Td>
            <Td>3</Td>
            <Td>8</Td>
            <Td>27</Td>
            <Td>27</Td>
            <Td>76</Td>
            <Td>−49</Td>
            <Td>17</Td>
            <Td>
              Relegation to the
              <a
                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
                title="2016–17 Football League Championship"
              >
                Football League Championship
              </a>
            </Td>
          </Tr>
        </TableBody>
      </Table>
    </Section>
  </>
)
