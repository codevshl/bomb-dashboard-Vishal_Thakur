import React from 'react';

import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import Page from '../../components/Page';
import { makeStyles } from '@material-ui/core/styles';
import HomeImage from '../../assets/img/background.jpg';
import { Box, Card, CardContent, Button, Typography, Grid } from '@material-ui/core';
import ProgressCountdown from '../Boardroom/components/ProgressCountdown';
import moment from 'moment';
import { Alert } from '@material-ui/lab';
import Divider from '@material-ui/core/Divider/Divider';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import bshares from '../../assets/img/bshares.png';
import bomb from '../../assets/img/bomb.png';
import blurs from '../../assets/img/blurs.png';
import bshareBnbLp from '../../assets/img/bshareBnbLp.png';
import bombBitcoinLp from '../../assets/img/bombBitcoinLp.png';
import iconArrowDownCir from '../../assets/img/iconArrowDownCir.svg';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
} ``

const rows = [
  createData({ name: '$BOMB', icon: '' }, '8.66M', '60.9k', '0.24', 4.0),
  createData({ name: '$BSHARE', icon: '' }, '11.43K', '8.49m', '$300', 4.3),
  createData({ name: '$BBOND', icon: '' }, '20.00K', '175k', '$0.28', 6.0),
];

const Dashboard = () => {
  const BackgroundImage = createGlobalStyle`
  body {
    background: url(${blurs}),url(${HomeImage});
    background-size: cover !important;
    background-color: #171923;
  }`;

  const TITLE = 'bomb.money | Bomb Finance Summary';
  return (
    <div className="page-container">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <BackgroundImage />

      <Box mt={5} style={{ minHeight: '100vh' }}>
        <Grid container justify="center" direction="column" alignItems="center">

          {/* CARD 1 */}

          <Card
            style={{
              width: '80%',
              marginBottom: '20px',
              backgroundColor: '#20254380',
            }}
          >
            <CardContent style={{ textAlign: 'center' }}>
              <Typography
                style={{ textTransform: 'capitalize', color: '#fff', marginBottom: '10px', fontSize: '22px' }}
              >
                Bomb Finance Summary
              </Typography>
              <Divider light={true} style={{ backgroundColor: '#C3C5CBBF' }} />
            </CardContent>
            <CardContent style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <TableContainer component={Paper} style={{ backgroundColor: 'transparent' }}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center">Current supply</TableCell>
                        <TableCell align="center">Total supply</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component="th" scope="row">
                            <div>
                              <img src="" />
                              <Typography>{row.name.name}</Typography>
                            </div>
                          </TableCell>
                          <TableCell align="center">{row.calories}</TableCell>
                          <TableCell align="center">{row.fat}</TableCell>
                          <TableCell align="center">{row.carbs}</TableCell>
                          <TableCell align="center">
                            <svg
                              fill="none"
                              height="33"
                              viewBox="0 0 35 33"
                              width="35"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g stroke-linecap="round" stroke-linejoin="round" stroke-width=".25">
                                <path d="m32.9582 1-13.1341 9.7183 2.4424-5.72731z" fill="#e17726" stroke="#e17726" />
                                <g fill="#e27625" stroke="#e27625">
                                  <path d="m2.66296 1 13.01714 9.809-2.3254-5.81802z" />
                                  <path d="m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" />
                                  <path d="m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" />
                                  <path d="m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" />
                                  <path d="m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" />
                                  <path d="m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" />
                                  <path d="m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" />
                                </g>
                                <path
                                  d="m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z"
                                  fill="#d5bfb2"
                                  stroke="#d5bfb2"
                                />
                                <path
                                  d="m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z"
                                  fill="#d5bfb2"
                                  stroke="#d5bfb2"
                                />
                                <path
                                  d="m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z"
                                  fill="#233447"
                                  stroke="#233447"
                                />
                                <path
                                  d="m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z"
                                  fill="#233447"
                                  stroke="#233447"
                                />
                                <path d="m10.8733 28.8721.6495-5.3386-4.13117.1167z" fill="#cc6228" stroke="#cc6228" />
                                <path d="m24.0982 23.5335.6366 5.3386 3.4946-5.2219z" fill="#cc6228" stroke="#cc6228" />
                                <path
                                  d="m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z"
                                  fill="#cc6228"
                                  stroke="#cc6228"
                                />
                                <path
                                  d="m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z"
                                  fill="#cc6228"
                                  stroke="#cc6228"
                                />
                                <path d="m8.392 17.6507 3.1049 6.0513-.1039-3.0062z" fill="#e27525" stroke="#e27525" />
                                <path
                                  d="m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z"
                                  fill="#e27525"
                                  stroke="#e27525"
                                />
                                <path
                                  d="m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z"
                                  fill="#e27525"
                                  stroke="#e27525"
                                />
                                <path
                                  d="m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z"
                                  fill="#e27525"
                                  stroke="#e27525"
                                />
                                <path
                                  d="m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z"
                                  fill="#f5841f"
                                  stroke="#f5841f"
                                />
                                <path
                                  d="m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z"
                                  fill="#f5841f"
                                  stroke="#f5841f"
                                />
                                <path
                                  d="m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z"
                                  fill="#c0ac9d"
                                  stroke="#c0ac9d"
                                />
                                <path
                                  d="m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z"
                                  fill="#161616"
                                  stroke="#161616"
                                />
                                <path
                                  d="m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z"
                                  fill="#763e1a"
                                  stroke="#763e1a"
                                />
                                <path
                                  d="m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z"
                                  fill="#763e1a"
                                  stroke="#763e1a"
                                />
                                <path
                                  d="m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z"
                                  fill="#f5841f"
                                  stroke="#f5841f"
                                />
                                <path
                                  d="m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z"
                                  fill="#f5841f"
                                  stroke="#f5841f"
                                />
                                <path
                                  d="m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z"
                                  fill="#f5841f"
                                  stroke="#f5841f"
                                />
                              </g>
                            </svg>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              <Box style={{ marginRight: '5%' }}>
                <Typography style={{ fontSize: '18px' }}>Current Epoch</Typography>
                <Typography style={{ fontSize: '35px' }}>258</Typography>
                <hr></hr>
                <Typography style={{ fontSize: '35px' }}>03:38:36</Typography>
                <Typography style={{ fontSize: '18px' }}>Next Epoch in</Typography>
                <hr></hr>
                <Typography style={{ fontSize: '14px' }}>
                  Live TWAP: <span style={{ color: '#00E8A2' }}>1.17</span>{' '}
                </Typography>
                <Typography style={{ fontSize: '14px' }}>
                  TVL: <span style={{ color: '#00E8A2' }}>$5,002,412</span>
                </Typography>
                <Typography style={{ fontSize: '14px' }}>
                  Last Epoch TWAP: <span style={{ color: '#00E8A2' }}>1.22</span>
                </Typography>
              </Box>
            </CardContent>
          </Card>

          {/* CARD 2 */}
          <Card style={{ width: '80%', marginBottom: '20px', backgroundColor: 'transparent', height: '450px' }}>
            <CardContent align="center" style={{ display: 'flex' }}>

              {/* BOX LEFT */}
              <Box style={{ width: `calc(75% - 20px)`, backgroundColor: 'transparent' }}>
                <div>
                  <Box
                    style={{
                      width: '100%',
                      height: '40px',
                      backgroundColor: '#13989c',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <p style={{ verticalAlign: 'center', fontSize: '24px', fontWeight: '800' }}>Invest Now</p>
                  </Box>

                  <Box style={{ display: 'flex' }}>
                    <p
                      style={{
                        width: '50%',
                        height: '40px',
                        backgroundColor: '#E5E5E5',
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '18px',
                      }}
                    >
                      Chat on discord
                    </p>
                    <p
                      style={{
                        width: '45%',
                        height: '40px',
                        marginLeft: 'auto',
                        backgroundColor: '#E5E5E5',
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '18px',
                      }}
                    >
                      Read on docs
                    </p>
                  </Box>

                  <Box style={{ backgroundColor: '#20254380', height: '300px', borderRadius: '10px' }}>
                    <div style={{ display: 'flex' }}>
                      <img
                        style={{
                          height: '48px',
                          marginLeft: '20px',
                        }}
                        src={bshares}
                      />
                      <p style={{ fontSize: '22px' }}>Boardroom</p>
                      <div
                        style={{
                          backgroundColor: '#00E8A2',
                          height: '16px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginTop: '30px',
                          marginLeft: '18px',
                          borderRadius: '5px',
                        }}
                      >
                        <p style={{ fontSize: '12px', padding: '18px' }}>Recommended</p>
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex' }}>
                        <p style={{ fontSize: '14px', marginLeft: '20px' }}>Stake BSHARE and earn BOMB every epoch</p>
                        <p style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '20px' }}>TVL: $1,008,430</p>
                      </div>
                      <hr></hr>
                      <p style={{ display: 'flex', justifyContent: 'right', marginRight: '20px' }}>
                        Total Staked: 7232
                      </p>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '25%' }}>
                        <p>Daily Returns</p>
                        <p>2%</p>
                      </div>

                      <div style={{ width: '20%' }}>
                        <p>Your Stake :</p>
                        <p>
                          <img
                            style={{
                              height: '18px',
                              marginRight: '10px',
                            }}
                            src={bshares}
                          />
                          6.0000
                        </p>
                        <p>~$1171.62</p>
                      </div>

                      <div style={{ width: '20%' }}>
                        <p>Earned :</p>

                        <p>
                          <img
                            style={{
                              height: '18px',
                              marginRight: '10px',
                            }}
                            src={bomb}
                          />
                          1660.4413
                        </p>

                        <p>~$298.88</p>
                      </div>

                      <div style={{ width: '35%', marginRight: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                          <div
                            style={{
                              width: '70%',
                              height: '18px',
                              border: '1px solid white',
                              borderRadius: '50px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '4px 10px 4px 15px',
                              marginTop: '20px'
                            }}
                          >
                            <span
                              style={{
                                color: 'rgba(255, 255, 255, 1)',
                                height: 'auto',
                                fontSize: 15
                              }}
                            >
                              <span>Deposit</span>
                            </span>
                            <img
                              style={{
                                width: '21px',
                                height: '21px',
                                position: 'relative',
                              }}
                              src={iconArrowDownCir}
                            />
                          </div>
                          <div
                            style={{
                              width: '50%',
                              height: '18px',
                              border: '1px solid white',
                              borderRadius: '50px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '4px 10px 4px 15px',
                              marginTop: '20px',
                              marginLeft: '20px',
                            }}
                          >
                            <span
                              style={{
                                color: 'rgba(255, 255, 255, 1)',
                                height: 'auto',
                                textAlign: 'left',
                                fontSize: 15
                              }}
                            >
                              <span>Withdraw</span>
                            </span>
                            <img
                              style={{
                                width: '21px',
                                height: '21px',
                                position: 'relative',
                              }}
                              src={iconArrowDownCir}
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            width: '70%',
                            height: '23px',
                            border: '1px solid white',
                            borderRadius: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '4px 10px 4px 15px',
                            marginTop: '10px',
                          }}
                        >
                          <span
                            style={{
                              color: 'rgba(255, 255, 255, 1)',
                              height: 'auto',
                              textAlign: 'left',
                              fontSize: 15
                            }}
                          >
                            <span>Claim Rewards</span>
                          </span>
                          <img
                            style={{
                              width: '21px',
                              height: '21px',
                              marginLeft: '5px'
                            }}
                            src={iconArrowDownCir}
                          />
                        </div>
                      </div>
                    </div>
                  </Box>
                </div>
              </Box>

              {/* BOX RIGHT */}
              <Box style={{ width: '25%', marginLeft: '25px', backgroundColor: '#20254380', borderRadius: '10px' }}>
                <div>
                  <p style={{ fontSize: '22px' }}>Latest News</p>
                </div>
              </Box>
            </CardContent>
          </Card>

          {/* CARD 3 */}
          <Card style={{ width: '80%', height: '600px', marginBottom: '20px', backgroundColor: '#20254380' }}>
            <CardContent align="center" style={{ display: 'flex' }}>
              <Box style={{ width: '100%', backgroundColor: 'transparent' }}>
                <div>
                  <div>
                    <div style={{ display: 'flex' }}>
                      <p style={{ fontSize: '22px' }}>Bomb Farms</p>
                      <div
                        style={{
                          backgroundColor: '#00E8A2',
                          height: '16px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginTop: '30px',
                          marginLeft: '18px',
                          borderRadius: '5px',
                        }}
                      >
                        <p style={{ fontSize: '12px', padding: '18px' }}>Recommended</p>
                      </div>
                      <div
                            style={{
                              width: '12%',
                              height: '18px',
                              border: '1px solid white',
                              borderRadius: '50px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '4px 10px 4px 15px',
                              marginTop: '20px',
                              marginLeft: 'auto'

                            }}
                          >
                            <span
                              style={{
                                color: 'rgba(255, 255, 255, 1)',
                                height: 'auto',
                                fontSize: 15
                              }}
                            >
                              <span>Claim all</span>
                            </span>
                            <img
                              style={{
                                width: '21px',
                                height: '21px',
                                position: 'relative',
                              }}
                              src={iconArrowDownCir}
                            />
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex' }}>
                        <p style={{ fontSize: '14px', marginLeft: '20px' }}>
                          Stake your LP tokens in our farms to start earning $BSHARE
                        </p>
                        <p style={{ fontSize: '14px', marginLeft: 'auto', marginRight: '20px' }}>TVL: $1,008,430</p>
                      </div>
                      <hr></hr>
                    </div>

                    {/* BOMB BTCB */}
                    <div>
                      <div style={{ display: 'flex' }}>
                        <img
                          style={{
                            height: '48px',
                            marginLeft: '20px',
                          }}
                          src={bombBitcoinLp}
                        />
                        <p style={{ fontSize: '22px' }}>BOMB-BTCB</p>
                        <div
                          style={{
                            backgroundColor: '#00E8A2',
                            height: '16px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                            marginLeft: '18px',
                            borderRadius: '5px',
                          }}
                        >
                          <p style={{ fontSize: '12px', padding: '18px' }}>Recommended</p>
                        </div>
                      </div>
                      <hr></hr>

                      <div style={{ display: 'flex' }}>
                        <div style={{ width: '25%' }}>
                          <p>Daily Returns</p>
                          <p>2%</p>
                        </div>

                        <div style={{ width: '20%' }}>
                          <p>Your Stake :</p>
                          <p>
                            <img
                              style={{
                                height: '18px',
                                marginRight: '10px',
                              }}
                              src={bshares}
                            />
                            6.0000
                          </p>
                          <p>~$1171.62</p>
                        </div>

                        <div style={{ width: '20%' }}>
                          <p>Earned :</p>

                          <p>
                            <img
                              style={{
                                height: '18px',
                                marginRight: '10px',
                              }}
                              src={bomb}
                            />
                            1660.4413
                          </p>

                          <p>~$298.88</p>
                        </div>

                        <div style={{ width: '35%', marginTop: '5%' }}>
                          <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <div
                            style={{
                              width: '20%',
                              height: '18px',
                              border: '1px solid white',
                              borderRadius: '50px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '4px 10px 4px 15px',
                              marginTop: '20px',
                              marginLeft: 'auto'

                            }}
                          >
                            <span
                              style={{
                                color: 'rgba(255, 255, 255, 1)',
                                height: 'auto',
                                fontSize: 15
                              }}
                            >
                              <span>Deposit</span>
                            </span>
                            <img
                              style={{
                                width: '21px',
                                height: '21px',
                                position: 'relative',
                              }}
                              src={iconArrowDownCir}
                            />
                         </div>
                         <div
                            style={{
                              width: '20%',
                              height: '18px',
                              border: '1px solid white',
                              borderRadius: '50px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '4px 10px 4px 15px',
                              marginTop: '20px',
                              marginLeft: 'auto'

                            }}
                          >
                            <span
                              style={{
                                color: 'rgba(255, 255, 255, 1)',
                                height: 'auto',
                                fontSize: 15
                              }}
                            >
                              <span>Withdraw</span>
                            </span>
                            <img
                              style={{
                                width: '21px',
                                height: '21px',
                                position: 'relative',
                              }}
                              src={iconArrowDownCir}
                            />
                         </div>
                         <div
                            style={{
                              width: '20%',
                              height: '23px',
                              border: '1px solid white',
                              borderRadius: '50px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '4px 10px 4px 15px',
                              marginTop: '20px',
                              marginLeft: 'auto'

                            }}
                          >
                            <span
                              style={{
                                color: 'rgba(255, 255, 255, 1)',
                                height: 'auto',
                                fontSize: 15
                              }}
                            >
                              <span>Claim rewards</span>
                            </span>
                            <img
                              style={{
                                width: '21px',
                                height: '21px',
                                position: 'relative',
                              }}
                              src={iconArrowDownCir}
                            />
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr></hr>

                    {/* BSHARE-BNB */}
                    <div>
                      <div style={{ display: 'flex' }}>
                        <img
                          style={{
                            height: '48px',
                            marginLeft: '20px',
                          }}
                          src={bshareBnbLp}
                        />
                        <p style={{ fontSize: '22px' }}>BSHARE-BNB</p>
                        <div
                          style={{
                            backgroundColor: '#00E8A2',
                            height: '16px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                            marginLeft: '18px',
                            borderRadius: '5px',
                          }}
                        >
                          <p style={{ fontSize: '12px', padding: '18px' }}>Recommended</p>
                        </div>
                      </div>
                      <hr></hr>

                      <div style={{ display: 'flex' }}>
                        <div style={{ width: '25%' }}>
                          <p>Daily Returns</p>
                          <p>2%</p>
                        </div>

                        <div style={{ width: '20%' }}>
                          <p>Your Stake :</p>
                          <p>
                            <img
                              style={{
                                height: '18px',
                                marginRight: '10px',
                              }}
                              src={bshares}
                            />
                            6.0000
                          </p>
                          <p>~$1171.62</p>
                        </div>

                        <div style={{ width: '20%' }}>
                          <p>Earned :</p>

                          <p>
                            <img
                              style={{
                                height: '18px',
                                marginRight: '10px',
                              }}
                              src={bomb}
                            />
                            1660.4413
                          </p>

                          <p>~$298.88</p>
                        </div>

                        <div style={{ width: '35%', marginLeft: '20px'}}>
                          <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <div
                            style={{
                              width: '20%',
                              height: '18px',
                              border: '1px solid white',
                              borderRadius: '50px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '4px 10px 4px 15px',
                              marginTop: '20px',
                              marginLeft: 'auto'

                            }}
                          >
                            <span
                              style={{
                                color: 'rgba(255, 255, 255, 1)',
                                height: 'auto',
                                fontSize: 15
                              }}
                            >
                              <span>Deposit</span>
                            </span>
                            <img
                              style={{
                                width: '21px',
                                height: '21px',
                                position: 'relative',
                              }}
                              src={iconArrowDownCir}
                            />
                         </div>
                         <div
                            style={{
                              width: '20%',
                              height: '18px',
                              border: '1px solid white',
                              borderRadius: '50px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '4px 10px 4px 15px',
                              marginTop: '20px',
                              marginLeft: 'auto'

                            }}
                          >
                            <span
                              style={{
                                color: 'rgba(255, 255, 255, 1)',
                                height: 'auto',
                                fontSize: 15
                              }}
                            >
                              <span>Withdraw</span>
                            </span>
                            <img
                              style={{
                                width: '21px',
                                height: '21px',
                                position: 'relative',
                              }}
                              src={iconArrowDownCir}
                            />
                         </div>
                         <div
                            style={{
                              width: '20%',
                              height: '18px',
                              border: '1px solid white',
                              borderRadius: '50px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '4px 10px 4px 15px',
                              marginTop: '20px',
                              marginLeft: 'auto'

                            }}
                          >
                            <span
                              style={{
                                color: 'rgba(255, 255, 255, 1)',
                                height: 'auto',
                                fontSize: 15
                              }}
                            >
                              <span>Claim rewards</span>
                            </span>
                            <img
                              style={{
                                width: '21px',
                                height: '21px',
                                position: 'relative',
                              }}
                              src={iconArrowDownCir}
                            />
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </CardContent>
          </Card>

          {/* CARD 4 */}
          <Card style={{ width: '80%', marginBottom: '20px', backgroundColor: '#20254380' }}>
            <CardContent align="left">
              <div style={{ display: 'flex' }}>
                <img
                  style={{
                    height: '48px',
                    marginLeft: '20px',
                  }}
                  src={bshares}
                />
                <p style={{ fontSize: '22px' }}>Bonds</p>
                <div
                  style={{
                    backgroundColor: '#00E8A2',
                    height: '16px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '30px',
                    marginLeft: '18px',
                    borderRadius: '5px',
                  }}
                >
                  <p style={{ fontSize: '12px', padding: '18px' }}>Recommended</p>
                </div>
              </div>
              <div style={{marginRight: '10px'}}>
                <div style={{ display: 'flex' }}>
                  <p style={{ fontSize: '14px', marginLeft: '20px' }}>
                    BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1
                  </p>
                  <div style={{marginLeft: 'auto'}}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p>Purchase BBond</p>
                    <div
                      style={{
                        width: '106px',
                        height: '28px',
                        border: '1px solid white',
                        borderRadius: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '4px 10px 4px 15px',
                        marginTop: '20px',
                        marginLeft: '20px',
                      }}
                    >
                      <span
                        style={{
                          color: 'rgba(255, 255, 255, 1)',
                          height: 'auto',
                          textAlign: 'left',
                          lineHeight: 'normal',
                          marginRight: '19px',
                          marginBottom: '0',
                          alignSelf: 'auto',
                          fontFamily: 'Nunito',
                          fontSize: 15,
                          fontStretch: 'normal',
                          fontStyle: 'Regular',
                          fontWeight: 400,
                          textDecoration: 'none',
                        }}
                      >
                        <span>Purchase</span>
                      </span>
                      <img
                        style={{
                          width: '21px',
                          height: '21px',
                          position: 'relative',
                        }}
                        src={iconArrowDownCir}
                      />
                    </div>
                  </div>
                  <hr></hr>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', marginLeft: '20px', marginRight: '10pxs' }}>
                <div style={{ width: '25%' }}>
                  <p>Current Price: (Bomb)^2</p>
                  <p>BBond = 6.2872 BTCB</p>
                </div>

                <div style={{ width: '20%' }}>
                  <p>Avaialabe to redeem:</p>
                  <p>
                    <img
                      style={{
                        height: '18px',
                        marginRight: '10px',
                      }}
                      src={bshares}
                    />
                    456
                  </p>
                </div>
                <div style={{ marginLeft: 'auto', marginRight: '10px' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p>Redeem Bomb</p>
                    <div
                      style={{
                        width: '106px',
                        height: '28px',
                        border: '1px solid white',
                        borderRadius: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '4px 10px 4px 15px',
                        marginTop: '20px',
                        marginLeft: '20px',
                      }}
                    >
                      <span
                        style={{
                          color: 'rgba(255, 255, 255, 1)',
                          height: 'auto',
                          textAlign: 'left',
                          lineHeight: 'normal',
                          marginRight: '19px',
                          marginBottom: '0',
                          alignSelf: 'auto',
                          fontFamily: 'Nunito',
                          fontSize: 15,
                          fontStretch: 'normal',
                          fontStyle: 'Regular',
                          fontWeight: 400,
                          textDecoration: 'none',
                        }}
                      >
                        <span>Redeem</span>
                      </span>
                      <img
                        style={{
                          width: '21px',
                          height: '21px',
                          position: 'relative',
                        }}
                        src={iconArrowDownCir}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
