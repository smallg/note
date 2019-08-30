Deploy to PCF

$ cf login -a api.sys.sea.preview.pcf.manulife.com
LAN ID> pengguo

Password>
Authenticating...
Credentials were rejected, please try again.

Password>
Authenticating...
OK

Select an org (or press enter to skip):
1. ASIAREGIONAL-SEA-DEV
2. ASIAREGIONAL-SEA-SIT
3. SANDBOX

Org> 1
Targeted org ASIAREGIONAL-SEA-DEV

Select a space (or press enter to skip):
1. APAC_ICE
2. APAC_UIP
3. COMMON
4. COMMON_OCDM

Space> 1
Targeted space APAC_ICE

cf push referral-management -b staticfile_buildpack
