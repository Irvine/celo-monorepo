import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Cover from 'src/blue-owl/Cover'
import OpenGraph from 'src/header/OpenGraph'
import { H1, H4 } from 'src/fonts/Fonts'
import { NameSpaces, useTranslation } from 'src/i18n'
import pagePaths from 'src/shared/menu-items'
import valora from 'src/icons/valora-icon.png'
import nonProfitIMG from 'src/icons/non-profit-light-bg.png'
import sendToPhoneImg from 'src/icons/sent-to-phone_light-bg.png'
import { Cell, GridRow, Spans } from 'src/layout/GridRow'
// import menuItems from 'src/shared/menu-items'

import { standardStyles, textStyles } from 'src/styles'
import { Adventure } from 'src/home/Adventure'

export default function Landing() {
  const [t] = useTranslation(NameSpaces.cbe)

  return (
    <View style={styles.root}>
      <OpenGraph title={t('pageTitle')} description={t('description')} path={pagePaths.CBE.link} />
      <Cover />
      <GridRow
        desktopStyle={standardStyles.blockMarginTop}
        tabletStyle={standardStyles.blockMarginTopTablet}
        mobileStyle={standardStyles.blockMarginTopMobile}
        allStyle={standardStyles.centered}
      >
        <Cell tabletSpan={Spans.full} span={Spans.full}>
          <H4 style={[textStyles.center, standardStyles.elementalMarginTop]}>{t('subTitle')}</H4>
          <H1 style={[textStyles.center, standardStyles.elementalMarginBottom]}>
            {t('mainTitle')}
          </H1>
        </Cell>
      </GridRow>
      <GridRow
        allStyle={standardStyles.blockMarginTopMobile}
        desktopStyle={standardStyles.sectionMarginBottom}
        tabletStyle={standardStyles.sectionMarginBottomTablet}
        mobileStyle={standardStyles.sectionMarginBottomMobile}
      >
        <Adventure
          source={sendToPhoneImg}
          title={t('adventure1.title')}
          text={t('adventure1.text')}
          link={{ href: 'https://valoraapp.co/3j0mTjS', text: t('adventure1.link') }}
        />
        <Adventure
          source={nonProfitIMG}
          title={t('adventure2.title')}
          text={t('adventure2.text')}
          link={{ href: 'https://valoraapp.co/3l5XLtC', text: t('adventure2.link') }}
        />
        <Adventure
          source={valora}
          title={t('adventure3.title')}
          text={t('adventure3.text')}
          link={{ href: 'https://valoraapp.co/32d561R', text: t('adventure3.link') }}
        />
      </GridRow>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
})
